//
// This is only a SKELETON file for the 'Crypto Square' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Crypto {
  constructor(entry) {
    this.plaintext = entry
    }

  normalizePlaintext() {
    const normalized = this.plaintext.toLowerCase().replace(/[^a-z0-9]+/g, '')
    return normalized
  }

  size() {
    const c = Math.ceil(Math.sqrt(this.normalizePlaintext().length))
    return c
  }

  plaintextSegments() {
    const text = this.normalizePlaintext()
    const c = this.size()
    var segments = []
    for(let i = 0; segments.length < c; i += c){
      segments.push(text.slice(i, (i+c)))
    } 
    if(segments[c-1].length === 0 ){
      segments.pop()
    }
     console.table(segments)
      return segments
  }

  ciphertext() {
    const seg = this.plaintextSegments()
    const c = this.size()
    const ciphered = []
      for(let i = 0; i < c; i++){
          for(let i2 = 0; i2 < seg.length; i2++){
            ciphered.push(seg[i2].slice(i, (i+1))) 
          }
      }
    return ciphered.join('')
  }
}
