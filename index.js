import { resolve, resolveReverseByBtcAddress, resolveReverseByEthAddress } from './dist/index.js'

async function r() {
  console.log(await resolveReverseByEthAddress('0x71c7656ec7ab88b098defb751b7401b5f6d8976d'))
}


r()
