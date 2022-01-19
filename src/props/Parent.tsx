import { ChildAsFC } from './Child';
const Parent = () => {
    return <ChildAsFC color="red" onClick={() => console.log('Clicked')}>
    sdffsds    
    </ChildAsFC>;
};

export default Parent;