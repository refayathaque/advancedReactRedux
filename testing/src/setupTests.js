import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

// Name of this file is important because we need Jest to be able to find this

// Enzyme API

// Static: Render the given component and return plain HTML

// Shallow: Render JUST the given component and none of its children

// Full DOM: Render the component and all of its children + let us modify it afterwards
