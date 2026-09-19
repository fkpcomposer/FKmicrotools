// This extension is part of FKmicrotools in https://github.com/fkpcomposer/FKmicrotools/

let labelArray = [
    "HH",
    "C0",
    "c0",
    "D0",
    "d0",
    "E0",
    "F0",
    "f0",
    "G0",
    "g0",
    "A0",
    "a0",
    "B0",
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
    "B3",
    "C4",
    "c4",
    "D4",
    "d4",
    "E4",
    "F4",
    "f4",
    "G4",
    "g4",
    "A4",
    "a4",
    "B4",
]

let hertzArray = [
    0,
    65,
    69,
    73,
    77,
    82,
    87,
    92,
    98,
    103,
    110,
    117,
    123,
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
    988,
    1046,
    1108,
    1174,
    1245,
    1319,
    1397,
    1480,
    1568,
    1661,
    1760,
    1865,
    1976
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
    "100 255",
    "000 255"
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

//% color="#db00be" icon="\uf1c7"
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
    let volumePercent = 100

    let effectSlide = false
    let lastHertz= 0
    let lastPlayedWasSlide = false

    function resetVars(){
        index = 6
        loop = false
        timbre = WaveShape.Square
        hertzToPlay = 0

        chordDistance = 0
        chordIndex = 0
        chordOrigin = 0
        storedTimer = 0
        checkChord = false

        repeatOrigin = 0
        repeatTimes = 0
        checkRepeat = false

        volumeStart = 255
        volumeEnd = 255
        volumePercent = 100

        effectSlide = false
        lastHertz = 0
        lastPlayedWasSlide = false
    }

    loops.everyInterval(1, songCycle)

    function songCycle() {
        if (index > sheet.length) {
            musicState = 0
        } else if (!(music.isSoundPlaying()) && musicState == 1) {

            // Get the content from a part of the sheet
            let content = sheet.substr(index, 3)
            let contentNext = sheet.substr(index + 3, 3)

            // Check if content contains a command
            if (labelArray.indexOf(content.substr(0, 2)) == -1) {
                index += 3
                if (content.charAt(0) == "$") {
                    if (content.charAt(1) == "s"){
                        effectSlide = (content.charAt(2) == "1")
                    } else {
                        timbre = timbreArray.get(parseInt(content.charAt(1)))

                        let volumeString = volumeFxArray.get(parseInt(content.charAt(2)))
                        volumeStart = parseInt(volumeString.substr(0, 3))
                        volumeEnd = parseInt(volumeString.substr(4, 3))
                    }
                } else if (content.charAt(0) == "%") {
                    checkChord = true
                    chordDistance = parseInt(content.charAt(1))
                    storedTimer = input.runningTime() + (music.beat(BeatFraction.Half) * parseInt(content.charAt(2)))
                    chordOrigin = index
                } else if (content.charAt(0) == "@") {
                    if (content.substr(1, 2) == "..") {
                        if (repeatTimes == 0) {
                            checkRepeat = false
                        } else {
                            index = repeatOrigin + 3
                            repeatTimes -= 1
                        }
                    } else {
                        checkRepeat = true
                        repeatOrigin = index - 3
                        repeatTimes = parseInt(content.substr(1, 2)) - 1
                    }
                } else if (content.charAt(0) == "!"){
                    if (content.substr(1, 2) == "ra"){
                        volumePercent = 2763
                    } else {
                        volumePercent = parseInt(content.substr(1, 2))
                        if (volumePercent < 1){
                            volumePercent = 100
                        }
                    }
                }
            } else {

                let noteDurat = 0
                let allowRepeatCode = true

                // Set hertz
                hertzToPlay = labelArray.indexOf(content.substr(0, 2))
                hertzToPlay = hertzArray.get(hertzToPlay)

                // Set noteDurat based on the 3rd character in content
                if (content.charAt(2) == "D"){
                    noteDurat = music.beat(BeatFraction.Double)
                } else if (content.charAt(2) == "T") {
                    noteDurat = music.beat(BeatFraction.Whole) * 3
                } else if (content.charAt(2) == "Q") {
                    noteDurat = music.beat(BeatFraction.Double) * 2
                } else {
                    noteDurat = music.beat(BeatFraction.Whole) / parseInt(content.charAt(2))
                }

                if (effectSlide && (!(hertzToPlay == lastHertz)) && 29 < noteDurat){
                    noteDurat = 30
                    allowRepeatCode = false
                    lastPlayedWasSlide = true
                } else if (lastPlayedWasSlide){
                    lastPlayedWasSlide = false
                    noteDurat -= 30
                }

                if (checkChord) {
                    if (input.runningTime() < storedTimer) {
                        noteDurat = 15
                        chordIndex += 1
                        if (chordIndex == chordDistance || chordOrigin + chordDistance < index) {
                            chordIndex = 0
                            index = chordOrigin - 3
                        }
                    } else {
                        checkChord = false
                        index = (chordOrigin + (chordDistance * 3)) - 3
                    }
                }

                if (checkRepeat && (!(checkChord)) && contentNext == "@..") {
                    if (repeatTimes == 0) {
                        checkRepeat = false
                        index += 3
                    } else {
                        index = repeatOrigin
                        repeatTimes -= 1
                    }
                }

                // Set volume
                let playedVolume = volumePercent / 100
                if (volumePercent == 2763){
                    playedVolume = Math.random() * 100
                    playedVolume = 255 - playedVolume
                }

                // Set initial hertz
                let initialHertz = hertzToPlay
                if (effectSlide && (!(hertzToPlay == lastHertz)) && 29 < noteDurat) {
                    initialHertz = lastHertz
                    index -= 3
                }

                // All is done, play the note!
                if (checkChord) {
                    music.play(music.createSoundExpression(
                        timbre,
                        hertzToPlay, hertzToPlay,
                        playedVolume * 255, playedVolume * 255,
                        noteDurat,
                        SoundExpressionEffect.None, InterpolationCurve.Linear),
                        music.PlaybackMode.InBackground)
                } else {
                    music.play(music.createSoundExpression(
                        timbre,
                        initialHertz, hertzToPlay,
                        volumeStart * playedVolume, volumeEnd * playedVolume,
                        noteDurat,
                        SoundExpressionEffect.None, InterpolationCurve.Linear),
                        music.PlaybackMode.InBackground)
                }

                lastHertz = hertzToPlay
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
                resetVars()
            }
        } else {
            musicState = 0
            if (action == WavesActions.Stop) {
                index = 6
                resetVars()
            }
        }
    }

    //% block="Store preset song $presetToStore"
    //% group="Store a song"
    export function storePreset(presetToStore: WavesPreset) {
        if (presetToStore == WavesPreset.VivaldiSpring){
            sheet = "000106$02@02E22g22g22g22f24E24%23g2.B2.B24A24g22g22g22f24E24%23g2.B2.B24A24g22A24B24A22g22%23f2.d2.f2.!50@..!00g22B22A24g24A22B22c32%22g2.B2.g22B22A24g24A22B22c32%22g2.B2.g22c32%22g2.B2.A22g22f24E24%32d2.g2.f2.%24f2.E2.!50g22B22A24g24A22B22c32%22g2.B2.g22B22A24g24A22B22c32%22g2.B2.g22c32%22g2.B2.A22g22f24E24%32d2.g2.f2.!00B28c38B24HH4B28c38B24HH2!50@02B28c38B24A24g24A24B28c38B24HH4@..HH4B22B28A28g28f28E22B22B22B28A28g28f28E22B22B24A24g24A24B28A28g24B24B24B24A24g24A24B28A28B24c34d34E34d34c34B24A24g24f24E24@02B22B28A28g28f28E22B22@..B22B28A28g28f28%21E2.B2.c34d34E34d34c34B24A24g24f24E24@02g22HH4A24@..%21d2.f2.g24A24g22HH4A24%24g2.A2.%34g2.A2.E3.%32g2.A2.B2.E34B24c34B24%32g2.A2.B2.@05E34B24c34B24@..%32g2.A2.B2.E34B24c34B24%32g2.A2.B2.@04E34B24c34B24@..E34B24c34E21HH4E34B24E24f24%32E2.E3.f3.E34B24E24f24%38E2.E3.f3.E31HH2!00g22B22A24g24A22B22c32%22g2.B2.g22B22A24g24A22B22c32%22g2.B2.g22c32%22g2.B2.A22g22f24E24%32d2.g2.f2.%24f2.E2.!50g22B22A24g24A22B22c32%22g2.B2.g22B22A24g24A22B22c32%22g2.B2.g22c32%22g2.B2.A22g22f24E24%32d2.g2.f2.!20g24A24B24A24B24A24g24A24!40g24A24B24A24B24A24g24A24!70g24A24B24A24B24A24g24A24!00g24A24B24c34B24c34!50d34E34d34E34f34E34f34E34!00d34E34d34E34f34g34f34g34!50A34g34A34g34f34A34g34f34%21E3.g3.!40g34E34d34c34@03g24A24B24A24B24A24g24A24@..%22E2.g2.HH2%21E3.g3.!00%34B2.f3.A3.%34B2.E3.g3.%34B2.d3.f3.%34B2.E3.g3.%34B2.f3.A3.%34B2.E3.g3.%34B2.d3.f3."
        }
        music.setTempo(parseFloat(sheet.substr(3, 3)))
        sheetVersion = sheet.substr(0, 3)
        resetVars()
    }

    //% block="Store custom song $sheetToStore"
    //% group="Store a song"
    export function storeCustom(sheetToStore: string[]) {
        // Convert sheet array to string
        sheet = ""
        let item = ""

        for (let i = 0; i < sheetToStore.length; i++) {
            item = sheetToStore.get(i)
            if (item.charAt(0) == "#") {
            } else if (item.substr(0, 8) == "copyItem") {
                sheet = sheet + sheetToStore.get(parseInt(item.substr(9, item.length)))
            } else {
                sheet = sheet + sheetToStore.get(i)
            }
        }

        // Set other variables
        music.setTempo(parseFloat(sheet.substr(3, 3)))
        sheetVersion = sheet.substr(0, 3)
        resetVars()
    }

    //% block="Set loop to $loopBool"
    //% group="Song actions"
    export function songLoop(loopBool: boolean) {
        loop = loopBool
    }

    //% block="Get current note name"
    //% group="Get current note"
    export function currentNoteName() {
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
