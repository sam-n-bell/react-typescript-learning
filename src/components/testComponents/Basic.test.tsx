import {Basic} from './Basic';
import {shallow, mount} from 'enzyme';
import * as service from '../../services/MovieService'

it("renders", () => {
    const wrapper = mount(<Basic/>);
    expect(wrapper).not.toBeNull();
})