import angular from 'angular';
import gameDirective from './directives/gameDirective';
import reverseFilter from './filters/reverseFilter';
import roundDirective from './directives/roundDirective';
import gameController from './controllers/gameController';

import './styles/main.scss';

let app = angular.module('app', [])
    .directive('game', gameDirective)
    .directive('round', roundDirective)
    .controller('gameController', gameController)
    .filter('reverse', reverseFilter);

 export default app;