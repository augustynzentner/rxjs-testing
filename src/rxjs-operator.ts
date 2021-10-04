import { MonoTypeOperatorFunction, Observable } from 'rxjs';
import { distinctUntilChanged, debounceTime } from 'rxjs/operators';

export function distinctDebounce<T>(pauseFor: number): MonoTypeOperatorFunction<T> {
  return (source: Observable<T>) =>
    source.pipe(
      debounceTime(pauseFor),
      distinctUntilChanged(),
    );
}
