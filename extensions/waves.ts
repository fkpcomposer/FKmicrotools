let labelArray = [
    "HH",
    "C1",
    "c1",
    "D1",
    "d1",
    "E1",
    "F1",
    "f1",
    "G1",
    "g1",
    "A1",
    "a1",
    "B1",
    "C2",
    "c2",
    "D2",
    "d2",
    "E2",
    "e2",
    "F2",
    "f2",
    "G2",
    "g2",
    "A2",
    "a2",
    "B2",
    "C3",
    "c3",
    "D3",
    "d3",
    "E3",
    "F3",
    "f3",
    "G3",
    "g3",
    "A3",
    "a3",
    "B3"
]

let hertzArray = [
    0,
    131,
    139,
    147,
    156,
    165,
    175,
    185,
    196,
    208,
    220,
    233,
    247,
    262,
    277,
    294,
    311,
    330,
    349,
    370,
    392,
    415,
    440,
    466,
    494,
    523,
    554,
    587,
    622,
    659,
    698,
    740,
    784,
    831,
    880,
    932,
    988
]

let timbreArray = [
    WaveShape.Square,
    WaveShape.Triangle,
    WaveShape.Sawtooth,
    WaveShape.Sine,
    WaveShape.Noise
]

enum WavesPreset {
    //% block='"SMB Overworld" by Koji Kondo'
    MarioOverworld,
    //% block='"Mulberry Shrine" by FKPC'
    MulberryShrine
}

enum WavesActions {
    Play,
    Stop,
    Restart,
    Pause
}

//% color="#E63022"
namespace waves {
    // Loading up for the first time
    let sheet = ""
    let index = 6
    let loop = false
    let musicState = 0
    let timbre = WaveShape.Square
    let sheetVersion = "0"
    let storedTimer = 0
    let readState = 0
    let chordDistance = 0
    let chordIndex = 0
    let chordOrigin = 0

    basic.forever(function(){
        readIndex()
    })
    
    function readIndex() {
        if (index > sheet.length){
            musicState = 0
        } else if(!(music.isSoundPlaying())){

            // Get the content from a part of the sheet
            let content = sheet.substr(index, 3)

            if (labelArray.indexOf(content.substr(0, 2)) == -1) {
                index += 3

                if (content.charAt(0) == "$") {
                    timbre = timbreArray.get(parseInt(content.charAt(1)))
                } else if (content.charAt(0) == "%") {
                    readState = 1
                    storedTimer = input.runningTime() + (music.beat(BeatFraction.Half) * parseInt(content.charAt(1)))
                    chordDistance = parseInt(content.charAt(2))
                    chordOrigin = index
                }

                readIndex()
            
            } else {

                let noteDurat = 0
                
                // Set hertz
                let hertzToPlay = labelArray.indexOf(content.substr(0, 2))
                hertzToPlay = hertzArray.get(hertzToPlay)

                if (readState == 1 && input.runningTime() < storedTimer) {
                    noteDurat = 30
                    chordIndex += 1
                    if (chordIndex == chordDistance){
                        chordIndex = 0
                        index -= (chordDistance) * 3
                    }
                } else {
                    if (readState == 1){
                        index = chordOrigin
                        readState = 0
                    }
                    // Set noteDurat based on the 3rd character in content
                    noteDurat = music.beat(BeatFraction.Whole) / parseInt(content.charAt(2))
                }

                music.play(music.createSoundExpression(
                    timbre,
                    hertzToPlay, hertzToPlay,
                    255, 255,
                    noteDurat, SoundExpressionEffect.None, InterpolationCurve.Linear),
                    music.PlaybackMode.InBackground)
                
                index += 3
            }
        }
    }

    //% block="$action song"
    export function songAction(action: WavesActions) {
        music.stopAllSounds
        if (action == WavesActions.Play || action == WavesActions.Restart) {
            musicState = 1
            if (action == WavesActions.Restart) {
                index = 6
                readState = 0
            }
        } else {
            musicState = 0
            if (action == WavesActions.Stop) {
                index = 6
                readState = 0
            }
        }
    }

    //% block="Store preset song $presetToStore"
    export function storePreset(presetToStore: WavesPreset) {
        sheet = sheet
        music.setTempo(parseFloat(sheet.substr(3, 3)))
        sheetVersion = sheet.substr(0, 3)
    }

    //% block="Store custom song $sheetToStore"
    export function storeCustom(sheetToStore: string) {
        sheet = sheetToStore
        music.setTempo(parseFloat(sheet.substr(3, 3)))
        sheetVersion = sheet.substr(0, 3)
    }

    //% block="Set loop to $loopBool"
    export function songLoop(loopBool: boolean) {
        loop = loopBool
    }
}
