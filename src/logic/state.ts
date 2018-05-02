import * as store from 'store'

export class Member {
  time: number

  constructor(public name: string) {
    this.resetTime()
  }

  resetTime() {
    this.time = 0
  }
}

namespace Defaults {
  export const memberNames = ['Гарри', 'Толя']
  export const business = 'играют в шахматы'
  export const activity = 'ходит'
}

export class State {
  private static _instance: State;
  public static get Instance() {
    return this._instance || (this._instance = new this())
  }

  private memberNames: string[]
  public members: Member[]
  public business: string
  public activity: string

  constructor() {
    this.memberNames = store.get('memberNames') || Defaults.memberNames
    this.members = []
    for (let memberName of this.memberNames) {
      this.members.push(new Member(memberName))
    }
    this.business = store.get('business') || Defaults.business
    this.activity = store.get('activity') || Defaults.activity
  }

  public get header() {
    let arr = this.memberNames
    let names = arr.slice(0, arr.length - 1).join(', ') + " и " + arr.slice(-1);
    return `${names} ${this.business}`
  }

  saveToStore() {
    store.set('memberNames', this.memberNames)
    store.set('business', this.business)
    store.set('activity', this.activity)
  }
}
