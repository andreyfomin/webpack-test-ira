import JQuery from 'jquery';
import _ from 'lodash';
import './index.css';

function createComponent () {
    var element = document.createElement('div');

    /* lodash is required for the next line to work */
    element.innerHTML = _.join(['Hello ira','webpack'], ' ');

   document.body.appendChild(element);
}


function createComponentWithJquery () {
    JQuery('body').append(
        JQuery('<div></div>').text(_.join(['Hello','webpack'], ' '))
    );
}


JQuery(document).ready(function(){
    createComponent();
});

// createComponentWithJquery();
// createComponent();