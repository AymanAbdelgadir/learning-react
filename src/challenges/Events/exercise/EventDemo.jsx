import { useState } from 'react';

const EventDemo = (props) => {
    const [value, setValue] = useState('This is a paragraph');
    const [isHovered, setIsHovered] = useState(false);

    const clicked = () => {
        setValue('Button clicked');
    };

    const copied = () => {
        setValue('Text copied');
    };

    return (
        <div>
            <p
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onCopy={copied}
                style={{
                    backgroundColor: isHovered ? 'lightyellow' : 'transparent',
                    padding: '10px',
                    borderRadius: '5px',
                }}
            >
                {value}
            </p>
            <button onClick={clicked}>Change text</button>
        </div>
    );
};

export default EventDemo;
