"use client";

import React, { useState, useRef, useEffect } from 'react';
import { IconBrandMessenger, IconSend, IconX, IconSparkles, IconUser, IconMicrophone, IconPlayerStop, IconVolume, IconPlayerPlay } from './Icons';
import { sendMessageToChat, textToSpeech, transcribeAudio } from '../actions/geminiActions';
import { ChatMessage } from '../types';
import { logoIcon } from '../assets/logo';
import SafeImage from './SafeImage';
import { decode, decodeAudioData } from '../services/audioUtils';

// A simple markdown to HTML converter to handle bold text and lists.
const parseMarkdownToHTML = (markdown: string): string => {
  const lines = markdown.split('\n');
  let html = '';
  let inList = false;

  for (let line of lines) {
    // Bold text
    line = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

    // List items
    if (line.trim().startsWith('* ') || line.trim().startsWith('- ')) {
      if (!inList) {
        html += '<ul>';
        inList = true;
      }
      html += `<li>${line.trim().substring(2)}</li>`;
    } else {
      if (inList) {
        html += '</ul>';
        inList = false;
      }
      if (line.trim().length > 0) {
        html += `<p>${line}</p>`;
      }
    }
  }

  if (inList) {
    html += '</ul>';
  }

  return html;
};


const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      text: "Hi there! I'm SIP Buddy. Ask me anything about SIPs, mutual funds, risk, or financial planning!",
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [isTranscribing, setIsTranscribing] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const audioContextRef = useRef<AudioContext | null>(null);
  const audioSourceRef = useRef<AudioBufferSourceNode | null>(null);

  const stopCurrentAudio = () => {
    if (audioSourceRef.current) {
      audioSourceRef.current.stop();
      audioSourceRef.current.disconnect();
      audioSourceRef.current = null;
    }
    setMessages(prev => prev.map(m => ({ ...m, isPlaying: false })));
  };

  useEffect(() => {
    // Listen for custom event to open chatbot from other components
    const handleOpenChat = () => setIsOpen(true);
    window.addEventListener('open-chatbot', handleOpenChat);

    if (isOpen) {
      // Initialize AudioContext on user interaction
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
      }
    } else {
      stopCurrentAudio();
    }

    return () => {
      window.removeEventListener('open-chatbot', handleOpenChat);
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const playAudio = async (base64Audio: string, messageIndex: number) => {
    if (!audioContextRef.current) return;
    stopCurrentAudio();

    try {
      setMessages(prev => prev.map((m, i) => ({ ...m, isPlaying: i === messageIndex })));
      const audioBuffer = await decodeAudioData(decode(base64Audio), audioContextRef.current, 24000, 1);
      const source = audioContextRef.current.createBufferSource();
      source.buffer = audioBuffer;
      source.connect(audioContextRef.current.destination);
      source.start();
      source.onended = () => {
        setMessages(prev => prev.map((m, i) => i === messageIndex ? { ...m, isPlaying: false } : m));
        audioSourceRef.current = null;
      };
      audioSourceRef.current = source;
    } catch (error) {
      console.error("Failed to play audio:", error);
      setMessages(prev => prev.map(m => ({ ...m, isPlaying: false })));
    }
  };

  const toggleAudio = (base64Audio: string, messageIndex: number) => {
    if (messages[messageIndex].isPlaying) {
      stopCurrentAudio();
    } else {
      playAudio(base64Audio, messageIndex);
    }
  };

  const handleSend = async () => {
    if (input.trim() === '' || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await sendMessageToChat(messages, input);
      const audioData = await textToSpeech(responseText);
      const modelMessage: ChatMessage = { role: 'model', text: responseText, audioData, isPlaying: false };
      setMessages((prev) => [...prev, modelMessage]);
    } catch (error) {
      console.error('Chatbot error:', error);
      const errorMessage: ChatMessage = {
        role: 'model',
        text: 'Sorry, I encountered an error. Please try again.',
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  const handleStartRecording = async () => {
    if (isRecording) return;
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      audioChunksRef.current = [];

      mediaRecorderRef.current.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };

      mediaRecorderRef.current.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        if (audioBlob.size === 0) return;

        setIsTranscribing(true);
        try {
          const formData = new FormData();
          formData.append('audio', audioBlob);
          const transcript = await transcribeAudio(formData);
          setInput(prev => prev + transcript);
        } catch (error) {
          console.error("Transcription error:", error);
        } finally {
          setIsTranscribing(false);
        }
      };

      mediaRecorderRef.current.start();
      setIsRecording(true);
    } catch (error) {
      console.error("Error accessing microphone:", error);
      alert("Could not access the microphone. Please check your browser permissions.");
    }
  };

  const handleStopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
      setIsRecording(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-110 z-50 border-2 border-white"
        aria-label="Toggle Chatbot"
      >
        {isOpen ? <IconX /> : <IconBrandMessenger />}
      </button>

      {isOpen && (
        <div className="fixed bottom-20 right-6 w-full max-w-sm h-[70vh] max-h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col z-50 transition-all duration-300 ease-in-out origin-bottom-right transform scale-100 opacity-100">
          <header className="flex items-center justify-between p-4 border-b border-slate-200 bg-slate-50 rounded-t-2xl">
            <div className="flex items-center">
              <SafeImage
                src={logoIcon}
                fallback={<IconSparkles className="h-8 w-8 text-blue-600" />}
                alt="SIP Buddy Icon"
                className="h-8 w-8 rounded-full"
              />
              <h2 className="text-lg font-semibold ml-3 text-slate-800">SIP Buddy</h2>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-slate-600">
              <IconX />
            </button>
          </header>
          <div className="flex-1 p-4 overflow-y-auto bg-slate-100/50">
            {messages.map((msg, index) => (
              <div key={index} className={`flex items-start gap-3 my-4 ${msg.role === 'user' ? 'justify-end' : ''}`}>
                {msg.role === 'model' && (
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <SafeImage
                      src={logoIcon}
                      fallback={<IconSparkles className="h-7 w-7 text-blue-600" />}
                      alt="SIP Buddy Icon"
                      className="h-7 w-7 rounded-full"
                    />
                  </div>
                )}
                <div className={`max-w-xs md:max-w-md px-4 py-2.5 rounded-2xl ${msg.role === 'user' ? 'bg-blue-600 text-white rounded-br-none' : 'bg-white text-slate-700 rounded-bl-none shadow-sm'}`}>
                  <div className="flex items-start gap-2">
                    {msg.role === 'model' ? (
                      <div
                        className="prose prose-sm prose-slate max-w-none break-words"
                        dangerouslySetInnerHTML={{ __html: parseMarkdownToHTML(msg.text) }}
                      />
                    ) : (
                      <p className="text-sm break-words">{msg.text}</p>
                    )}
                    {msg.role === 'model' && msg.audioData && (
                      <button onClick={() => toggleAudio(msg.audioData!, index)} className="text-slate-400 hover:text-blue-600 transition-colors flex-shrink-0">
                        {msg.isPlaying ? <IconPlayerStop className="h-4 w-4 text-red-500" /> : <IconPlayerPlay className="h-4 w-4" />}
                      </button>
                    )}
                  </div>
                </div>
                {msg.role === 'user' && (
                  <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0">
                    <IconUser className="h-5 w-5 text-slate-600" />
                  </div>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex items-start gap-3 my-4">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <SafeImage
                    src={logoIcon}
                    fallback={<IconSparkles className="h-7 w-7 text-blue-600" />}
                    alt="SIP Buddy Icon"
                    className="h-7 w-7 rounded-full"
                  />
                </div>
                <div className="max-w-xs md:max-w-md px-4 py-2.5 rounded-2xl bg-white text-slate-700 rounded-bl-none shadow-sm flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                  <span className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.15s] mx-1"></span>
                  <span className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <footer className="p-4 border-t border-slate-200 bg-white rounded-b-2xl">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={isRecording ? "Recording..." : isTranscribing ? "Transcribing..." : "Ask SIP Buddy..."}
                className="w-full pl-4 pr-24 py-3 bg-slate-100 rounded-full border-transparent focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                disabled={isLoading || isRecording || isTranscribing}
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
                <button
                  onClick={isRecording ? handleStopRecording : handleStartRecording}
                  disabled={isLoading || isTranscribing}
                  className={`p-2 rounded-full transition-colors ${isRecording ? 'bg-red-500 text-white' : 'text-slate-500 hover:bg-slate-200'}`}
                >
                  {isRecording ? <IconPlayerStop className="h-5 w-5" /> : <IconMicrophone className="h-5 w-5" />}
                </button>
                <button
                  onClick={handleSend}
                  disabled={isLoading || isRecording || isTranscribing}
                  className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 disabled:bg-blue-300 transition-colors"
                >
                  <IconSend className="h-5 w-5" />
                </button>
              </div>
            </div>
          </footer>
        </div>
      )}
    </>
  );
};

export default Chatbot;