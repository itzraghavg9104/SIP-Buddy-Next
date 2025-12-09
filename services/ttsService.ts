export const speakText = (text: string, onEnd?: () => void): void => {
    if (!('speechSynthesis' in window)) {
        console.warn('Text-to-speech not supported in this browser.');
        if (onEnd) onEnd();
        return;
    }

    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    // Simple splitting for very long text can be added here if needed, 
    // but for basic usage we'll just speak the chunk.
    const utterance = new SpeechSynthesisUtterance(text);

    const voices = window.speechSynthesis.getVoices();
    const preferredVoice = voices.find(voice =>
        voice.name.includes('Google US English') ||
        voice.name.includes('Samantha') ||
        voice.lang === 'en-US'
    );

    if (preferredVoice) {
        utterance.voice = preferredVoice;
    }

    utterance.rate = 1;
    utterance.pitch = 1;

    if (onEnd) {
        utterance.onend = () => {
            onEnd();
        };

        // Safety timeout in case onend never fires (common browser quirk)
        // Approximate duration + buffer
        // const estimatedDuration = (text.length / 5) * 500; 
        // setTimeout(() => { ... }, estimatedDuration + 5000); 
        // For now we rely on the event.
    }

    window.speechSynthesis.speak(utterance);
};

export const stopSpeech = (): void => {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
    }
};
