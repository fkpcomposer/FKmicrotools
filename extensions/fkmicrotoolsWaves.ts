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

let volumeFxArray = [
    "255 255",
    "255 100",
    "255 000",
    "000 255",
    "100 255",
]

enum WavesPreset {
    //% block='"Spring" by Vivaldi'
    VivaldiSpring
}

enum WavesActions {
    Play,
    Stop,
    Restart,
    Pause
}

let displayArray = [
    images.createImage(`
    . . . . .
    . # # # .
    . # . # .
    . # # # .
    . . . . .
    `),
    images.createImage(`
    . # # # .
    . # . . .
    . # # # .
    . . . . .
    # . . . .
    `),
    images.createImage(`
    # # # . .
    # . . . #
    # # # . .
    . . . . .
    # . . . .
    `),
    images.createImage(`
    . # # . .
    . # . # .
    . # # # .
    . . . . .
    # . . . .
    `),
    images.createImage(`
    # # . . .
    # . # . #
    # # # . .
    . . . . .
    # . . . .
    `),
    images.createImage(`
    . # # # .
    . # # . .
    . # # # .
    . . . . .
    # . . . .
    `),
    images.createImage(`
    . # # # .
    . # # . .
    . # . . .
    . . . . .
    # . . . .
    `),
    images.createImage(`
    # # # . .
    # # . . #
    # . . . .
    . . . . .
    # . . . .
    `),
    images.createImage(`
    . # . . .
    . # . # .
    . # # # .
    . . . . .
    # . . . .
    `),
    images.createImage(`
    # . . . .
    # . # . #
    # # # . .
    . . . . .
    # . . . .
    `),
    images.createImage(`
    . . # . .
    . # # # .
    . # . # .
    . . . . .
    # . . . .
    `),
    images.createImage(`
    . # . . .
    # # # . #
    # . # . .
    . . . . .
    # . . . .
    `),
    images.createImage(`
    . # # . .
    . # # # .
    . # # # .
    . . . . .
    # . . . .
    `),
    images.createImage(`
    . # # # .
    . # . . .
    . # # # .
    . . . . .
    # # . . .
    `),
    images.createImage(`
    # # # . .
    # . . . #
    # # # . .
    . . . . .
    # # . . .
    `),
    images.createImage(`
    . # # . .
    . # . # .
    . # # # .
    . . . . .
    # # . . .
    `),
    images.createImage(`
    # # . . .
    # . # . #
    # # # . .
    . . . . .
    # # . . .
    `),
    images.createImage(`
    . # # # .
    . # # . .
    . # # # .
    . . . . .
    # # . . .
    `),
    images.createImage(`
    . # # # .
    . # # . .
    . # . . .
    . . . . .
    # # . . .
    `),
    images.createImage(`
    # # # . .
    # # . . #
    # . . . .
    . . . . .
    # # . . .
    `),
    images.createImage(`
    . # . . .
    . # . # .
    . # # # .
    . . . . .
    # # . . .
    `),
    images.createImage(`
    # . . . .
    # . # . #
    # # # . .
    . . . . .
    # # . . .
    `),
    images.createImage(`
    . . # . .
    . # # # .
    . # . # .
    . . . . .
    # # . . .
    `),
    images.createImage(`
    . # . . .
    # # # . #
    # . # . .
    . . . . .
    # # . . .
    `),
    images.createImage(`
    . # # . .
    . # # # .
    . # # # .
    . . . . .
    # # . . .
    `),
    images.createImage(`
    . # # # .
    . # . . .
    . # # # .
    . . . . .
    # # . . .
    `),
    images.createImage(`
    # # # . .
    # . . . #
    # # # . .
    . . . . .
    # # . . .
    `),
    images.createImage(`
    . # # . .
    . # . # .
    . # # # .
    . . . . .
    # # . . .
    `),
    images.createImage(`
    # # . . .
    # . # . #
    # # # . .
    . . . . .
    # # . . .
    `),
    images.createImage(`
    . # # # .
    . # # . .
    . # # # .
    . . . . .
    # # . . .
    `),
    images.createImage(`
    . # # # .
    . # # . .
    . # . . .
    . . . . .
    # # . . .
    `),
    images.createImage(`
    # # # . .
    # # . . #
    # . . . .
    . . . . .
    # # . . .
    `),
    images.createImage(`
    . # . . .
    . # . # .
    . # # # .
    . . . . .
    # # . . .
    `),
    images.createImage(`
    # . . . .
    # . # . #
    # # # . .
    . . . . .
    # # . . .
    `),
    images.createImage(`
    . . # . .
    . # # # .
    . # . # .
    . . . . .
    # . . . .
    `),
    images.createImage(`
    . # . . .
    # # # . #
    # . # . .
    . . . . .
    # . . . .
    `),
    images.createImage(`
    . # # . .
    . # # # .
    . # # # .
    . . . . .
    # . . . .
    `),
    images.createImage(`
    . # # # .
    . # . . .
    . # # # .
    . . . . .
    # # . . .
    `),
    images.createImage(`
    # # # . .
    # . . . #
    # # # . .
    . . . . .
    # # . . .
    `),
    images.createImage(`
    . # # . .
    . # . # .
    . # # # .
    . . . . .
    # # . . .
    `),
    images.createImage(`
    # # . . .
    # . # . #
    # # # . .
    . . . . .
    # # . . .
    `),
    images.createImage(`
    . # # # .
    . # # . .
    . # # # .
    . . . . .
    # # . . .
    `),
    images.createImage(`
    . # # # .
    . # # . .
    . # . . .
    . . . . .
    # # . . .
    `),
    images.createImage(`
    # # # . .
    # # . . #
    # . . . .
    . . . . .
    # # . . .
    `),
    images.createImage(`
    . # . . .
    . # . # .
    . # # # .
    . . . . .
    # # . . .
    `),
    images.createImage(`
    # . . . .
    # . # . #
    # # # . .
    . . . . .
    # # . . .
    `),
    images.createImage(`
    . . # . .
    . # # # .
    . # . # .
    . . . . .
    # # . . .
    `),
    images.createImage(`
    . # . . .
    # # # . #
    # . # . .
    . . . . .
    # # . . .
    `),
    images.createImage(`
    . # # . .
    . # # # .
    . # # # .
    . . . . .
    # # . . .
    `),
    images.createImage(`
    . # # # .
    . # . . .
    . # # # .
    . . . . .
    # # # . .
    `),
    images.createImage(`
    # # # . .
    # . . . #
    # # # . .
    . . . . .
    # # # . .
    `),
    images.createImage(`
    . # # . .
    . # . # .
    . # # # .
    . . . . .
    # # # . .
    `),
    images.createImage(`
    # # . . .
    # . # . #
    # # # . .
    . . . . .
    # # # . .
    `),
    images.createImage(`
    . # # # .
    . # # . .
    . # # # .
    . . . . .
    # # # . .
    `),
    images.createImage(`
    . # # # .
    . # # . .
    . # . . .
    . . . . .
    # # # . .
    `),
    images.createImage(`
    # # # . .
    # # . . #
    # . . . .
    . . . . .
    # # # . .
    `),
    images.createImage(`
    . # . . .
    . # . # .
    . # # # .
    . . . . .
    # # # . .
    `),
    images.createImage(`
    # . . . .
    # . # . #
    # # # . .
    . . . . .
    # # # . .
    `),
    images.createImage(`
    . . # . .
    . # # # .
    . # . # .
    . . . . .
    # # . . .
    `),
    images.createImage(`
    . # . . .
    # # # . #
    # . # . .
    . . . . .
    # # # . .
    `),
    images.createImage(`
    . # # . .
    . # # # .
    . # # # .
    . . . . .
    # # # . .
    `)
]

//% color="#E63022"
//% groups='["Store a song", "Song actions", "Get current note"]'
namespace waves {
    // Loading up for the first time
    let sheet = ""
    let index = 6
    let loop = false
    let musicState = 0
    let timbre = WaveShape.Square
    let sheetVersion = "0"
    let hertzToPlay = 0
    let nextNoteTime = input.runningTime()

    let chordDistance = 0
    let chordIndex = 0
    let chordOrigin = 0
    let storedTimer = 0
    let checkChord = false

    let repeatOrigin = 0
    let repeatTimes = 0
    let checkRepeat = false

    let volumeStart = 255
    let volumeEnd = 255
    
    loops.everyInterval(1, songCycle)
    
    function songCycle() {
        if (index > sheet.length){
            musicState = 0
        } else if (!(music.isSoundPlaying()) && musicState == 1){

            // Get the content from a part of the sheet
            let content = sheet.substr(index, 3)
            let contentNext = sheet.substr(index + 3, 3)

            // Check if content contains a command
            if (labelArray.indexOf(content.substr(0, 2)) == -1) {
                index += 3
                if (content.charAt(0) == "$") {
                    timbre = timbreArray.get(parseInt(content.charAt(1)))

                    let volumeString = volumeFxArray.get(parseInt(content.charAt(2)))
                    volumeStart = parseInt(volumeString.substr(0, 3))
                    volumeEnd = parseInt(volumeString.substr(4, 3))
                } else if (content.charAt(0) == "%") {
                    checkChord = true
                    storedTimer = input.runningTime() + (music.beat(BeatFraction.Half) * parseInt(content.charAt(1)))
                    chordDistance = parseInt(content.charAt(2))
                    chordOrigin = index
                } else if (content.charAt(0) == "@"){
                    if (content.substr(1, 2) == ".."){
                        if (repeatTimes == 0) {
                            checkRepeat = false
                            index += 3
                        } else {
                            index = repeatOrigin
                            repeatTimes -= 1
                        }
                    } else {
                    checkRepeat = true
                    repeatOrigin = index - 3
                    repeatTimes = parseInt(content.substr(1, 2)) - 1
                    }
                }
            } else {

                let noteDurat = 0
                
                // Set hertz
                hertzToPlay = labelArray.indexOf(content.substr(0, 2))
                hertzToPlay = hertzArray.get(hertzToPlay)

                // Set noteDurat based on the 3rd character in content
                noteDurat = music.beat(BeatFraction.Whole) / parseInt(content.charAt(2))

                if (checkChord){
                    if (input.runningTime() < storedTimer){
                        noteDurat = 30
                        chordIndex += 1
                        if (chordIndex == chordDistance) {
                            chordIndex = 0
                            index -= (chordDistance) * 3
                        }
                    } else {
                        checkChord = false
                        index = (chordOrigin + (chordDistance * 3)) - 3
                    }
                }
                
                if (checkRepeat && (!(checkChord)) && contentNext == "@.."){
                    if (repeatTimes == 0){
                        checkRepeat = false
                        index += 3
                    } else {
                        index = repeatOrigin
                        repeatTimes -= 1
                    }
                }
                
                // All is done, play the note!
                if (checkChord) {
                    music.play(music.createSoundExpression(
                        timbre,
                        hertzToPlay, hertzToPlay,
                        255, 255,
                        noteDurat,
                        SoundExpressionEffect.None, InterpolationCurve.Linear),
                        music.PlaybackMode.InBackground)
                } else {
                    music.play(music.createSoundExpression(
                        timbre,
                        hertzToPlay, hertzToPlay,
                        volumeStart, volumeEnd,
                        noteDurat,
                        SoundExpressionEffect.None, InterpolationCurve.Linear),
                        music.PlaybackMode.InBackground)
                }

                nextNoteTime = input.runningTime() + noteDurat
                index += 3
            }
        }
    }

    //% block="$action song"
    //% group="Song actions"
    export function songAction(action: WavesActions) {
        music.stopAllSounds
        if (action == WavesActions.Play || action == WavesActions.Restart) {
            musicState = 1
            if (action == WavesActions.Restart) {
                index = 6
                checkChord = false
                checkRepeat = false
            }
        } else {
            musicState = 0
            if (action == WavesActions.Stop) {
                index = 6
                checkChord = false
                checkRepeat = false
            }
        }
    }

    //% block="Store preset song $presetToStore"
    //% group="Store a song"
    export function storePreset(presetToStore: WavesPreset) {
        sheet = sheet
        music.setTempo(parseFloat(sheet.substr(3, 3)))
        sheetVersion = sheet.substr(0, 3)
    }

    //% sheetToStore.defl=["000", "150", "C21D21E21F21G21A21B21C31"]
    //% block="Store custom song $sheetToStore"
    //% group="Store a song"
    export function storeCustom(sheetToStore: any[]) {
        // Convert sheet array to string
        sheet = ""
        let item = ""

        for (let i = 0; i < sheetToStore.length; i++) {
            item = sheetToStore.get(i)
            if (item.charAt(0) == "#"){
            } else if (item.substr(0, 8) == "copyItem") {
                sheet = sheet + sheetToStore.get(parseInt(item.substr(9, item.length)))
            } else {
                sheet = sheet + sheetToStore.get(i)
            }
        }

        // Set other variables
        music.setTempo(parseFloat(sheet.substr(3, 3)))
        sheetVersion = sheet.substr(0, 3)
    }
    
    //% block="Set loop to $loopBool"
    //% group="Song actions"
    export function songLoop(loopBool: boolean) {
        loop = loopBool
    }

    //% block="Get current note name"
    //% group="Get current note"
    export function currentNoteName(){
        return labelArray.get(hertzArray.indexOf(hertzToPlay))
    }

    //% block="Get current note image"
    //% group="Get current note"
    export function currentNoteImage() {
        return displayArray.get(hertzArray.indexOf(hertzToPlay))
    }

    //% block="Get current note value"
    //% group="Get current note"
    export function currentNoteValue() {
        return hertzArray.indexOf(hertzToPlay)
    }
}
