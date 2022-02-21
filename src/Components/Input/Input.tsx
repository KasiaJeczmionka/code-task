import './Input.scss';

type Props = {
    name?: string;
    placeHolder: string;
    value: string;
    onChange: (value: string) => void;
}

export const Input = (props: Props) => {
    const name = props.name ? (
        <p className="input-name">
            {props.name}
        </p>
    ) : null;

    return (
        <div className="input">
            {name}
            <input
                type="text"
                className="input-input"
                value={props.value}
                placeholder={props.placeHolder}
                onChange={(e) => props.onChange(e.target.value)}
            />
        </div>
    );
};
