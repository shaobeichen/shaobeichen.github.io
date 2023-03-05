class Storage {
  setItem(key, value, duration) {
    let expires = 0

    if (duration) expires = Date.now() + duration * 1000

    const data = JSON.stringify({ value, expires })
    localStorage.setItem(key, data)
  }

  getItem(key) {
    const item = localStorage.getItem(key)
    const data = JSON.parse(item)

    if (!data) return null

    if (data.expires && data.expires < Date.now()) {
      this.removeItem(key)
      return null
    }

    return data.value
  }

  removeItem(key) {
    localStorage.removeItem(key)
  }
}

export const storage = new Storage()
