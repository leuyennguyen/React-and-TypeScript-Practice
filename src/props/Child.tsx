interface ChildProps {
    color: string;
    onClick: () => void;
}

export const Child = ({ color, onClick }: ChildProps) => {
    return <div>
        {color}
        <button onClick={onClick}>Click me</button>
    </div>;
};

// FC = FunctionComponent
// React.FC = React.FunctionComponent : both workds
export const ChildAsFC: React.FC<ChildProps> = ({ color, onClick }) => {
    return <div>
        {color}
        <button onClick={onClick}>Click me</button>
    </div>;
};

