import React from 'react';
// import ReactDOM from 'react-dom';
import App from '../App';
import CommentBox from '../CommentBox'
import { shallow } from 'enzyme';

// We are using JSDOM here to create fake HTML elements in our CLI, doesn't exist in the browser

it('shows a comment box', () => {
    // const div = document.createElement('div');
    // ReactDOM.render(<App />, div);
    // // ^ Rendering App component in the fake div we created above
    // // Looking inside the div to check if CommentBox is in there
    // expect(div.innerHTML).toContain('Comment Box')
    // // ^ https://jestjs.io/docs/en/using-matchers
    // // ^ https://jest-bot.github.io/jest/docs/expect.html#tocontainitem
    // // * When testing we should never try and access the inner workings/implementation of ANOTHER component (e.g. child component)
    // ReactDOM.unmountComponentAtNode(div);
    // // ^ 'Clean up' for memory optimization

    // Since we're using enzyme we don't need ANY of the code above

    const wrapped = shallow(<App />);
    expect(wrapped.find(CommentBox).length).toEqual(1);
    // ^ Checking to see that there is ONE CommentBox component in our App component

});
