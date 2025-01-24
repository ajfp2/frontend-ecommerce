import { CanDeactivateFn } from '@angular/router';
import { ArticleNewReactiveComponent } from '../articles/article-new-reactive/article-new-reactive.component';

// export const articleNewDeactivateGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
//   return true;
// };
export const articleNewDeactivateGuard: CanDeactivateFn<ArticleNewReactiveComponent> = (component: ArticleNewReactiveComponent, currentRoute, currentState, nextState) => {
    return window.confirm('Estás seguro de abandonar esta página?');
};