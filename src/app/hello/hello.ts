import { Component, computed, effect, EffectRef, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-hello',
  imports: [],
  templateUrl: './hello.html',
  styleUrl: './hello.scss',
})
export class Hello {
  protected title: string = 'Welcome to Modern Angular!'
  protected isDisabled: boolean = false
  protected count: WritableSignal<number> = signal<number>(0)
  protected log: string = ''

  // Only run when the dependency changes
  // Avoid side effects in computed signals
  // if this is a method, then the method is called whenever the page is refreshed
  protected doubleCount = computed<number>(() => this.count() * 2)

  // Difference between effects and computed signal
  // computed signal returns a derived state, should be pure and side-effect free
  // effect reacts to state changes, do not return value
  // do not update signals inside effects!
  protected countLog: EffectRef = effect(() => {
    const c = this.count()
    if (!!c)
      this.log = `Count changed: ${this.count()}`
    else
      this.log = ''
  })

  onClick(): void {
    console.info('Button clicked')
  }

  updateCount(delta = 1): void {
    this.count.update(val => val + delta)
  }

  resetCount(): void {
    this.count.set(0)
  }
}
