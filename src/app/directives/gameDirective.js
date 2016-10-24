import gameController from '../controllers/gameController';

export default function gameDirective() {

    return {
        scope: {
        },
        transclude: true,
        restrict: 'EA',
        template: require('../views/gameView.html'),
        controller: gameController,
        controllerAs: 'vm',
        bindToController: true
    };
};