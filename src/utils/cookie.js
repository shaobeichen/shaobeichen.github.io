import jsCookie from 'js-cookie'

class Cookie {
  setItem(key, value, attributes) {
    jsCookie.set(key, value, attributes)
  }

  getItem(key) {
    return jsCookie.get(key)
  }

  removeItem(key) {
    jsCookie.remove(key)
  }
}
export const cookie = new Cookie()
