// This extension is part of FKmicrotools: https://github.com/fkpcomposer/FKmicrotools/

enum EnumVFX {
    //% block="spread"
    Spread,
    //% block="invert"
    Invert,
    //% block="threshold"
    Threshold
}

let stored_img = [0]
let coord = 0
let intensity = 0

//% color="#badb00" icon="\uf042"
namespace Filters {

    /**
    * @param funcVFX What effect will be applied to the screen?
    * @param funcIntensity Goes from 0 to 255. Changes the intensity of effects.
    */
    //% funcIntensity.min=0 funcIntensity.max=255
    //% block="Apply $funcVFX with intensity $funcIntensity"
    export function apply(funcVFX: EnumVFX, funcIntensity: number) {
        if (funcVFX == EnumVFX.Spread) {
            erase_screen_and_convert_to_array()
            intensity = funcIntensity / 255
            for (let index = 0; index <= 24; index++) {
                led.plotBrightness(index % 5, Math.floor(index / 5), stored_img[index] + led.pointBrightness(index % 5, Math.floor(index / 5)))
                coord = -1 + index % 5
                led.plotBrightness(coord, Math.floor(index / 5), stored_img[index] * intensity + led.pointBrightness(coord, Math.floor(index / 5)))
                coord = 1 + index % 5
                led.plotBrightness(coord, Math.floor(index / 5), stored_img[index] * intensity + led.pointBrightness(coord, Math.floor(index / 5)))
                coord = -1 + Math.floor(index / 5)
                led.plotBrightness(index % 5, coord, stored_img[index] * intensity + led.pointBrightness(index % 5, coord))
                coord = 1 + Math.floor(index / 5)
                led.plotBrightness(index % 5, coord, stored_img[index] * intensity + led.pointBrightness(index % 5, coord))
            }
        } else if (funcVFX == EnumVFX.Invert) {
            intensity = 1 + ((funcIntensity / 255) * -2)
            for (let index = 0; index <= 24; index++) {
                let thisLEDbright = led.pointBrightness(index % 5, Math.floor(index / 5)) - (255 / 2)
                thisLEDbright = (thisLEDbright * intensity) + (255 / 2)
                led.plotBrightness(index % 5, Math.floor(index / 5), thisLEDbright)
            }
        } else if (funcVFX == EnumVFX.Threshold) {
            for (let index = 0; index <= 24; index++) {
                if (intensity <= led.pointBrightness(index % 5, Math.floor(index / 5))) {
                    led.plot(index % 5, Math.floor(index / 5))
                } else {
                    led.unplot(index % 5, Math.floor(index / 5))
                }
            }
        }
    }

    function erase_screen_and_convert_to_array() {
        stored_img = []
        for (let index = 0; index <= 24; index++) {
            stored_img.push(led.pointBrightness(index % 5, Math.floor(index / 5)))
        }
        images.createImage(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `).showImage(0, 0)
    }
}
