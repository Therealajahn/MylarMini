function ProtoApp(){
    const startAudioButton = 
        document.getElementById('start-audio-button')
        .addEventListener('click',() => {
            startAudio();
        })

    async function startAudio(){
        await Tone.start()
        console.log('audio started')
    }

    const clap = clapInit();
    const clapButton = 
        document.getElementById('clap-button')
        .addEventListener('click',() => {
            clap();
        });

    const kick = kickInit();
    const kickButton = 
        document.getElementById('kick-button')
        .addEventListener('click',() => {
            kick();
        });



}
ProtoApp();
