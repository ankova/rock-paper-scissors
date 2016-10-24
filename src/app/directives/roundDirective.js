export default function roundDirective() {

    function roundDirectiveLink(scope) {
    }

    return {
        scope: {
            value: '='
        },
        transclude: true,
        restrict: 'EA',
        template: require('../views/roundView.html'),
        link: roundDirectiveLink
    };
}