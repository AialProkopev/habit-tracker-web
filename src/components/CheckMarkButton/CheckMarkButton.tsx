import { useState } from 'react';

import { HexColor } from '@/consts/color';

import styles from './CheckMarkButton.module.css';

interface CheckMarkButtonProps {
    onClick: (checked: boolean) => void;
    bgColor: HexColor;
}

export default function CheckMarkButton(props: CheckMarkButtonProps) {
    const { onClick, bgColor } = props;

    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        setChecked(!checked);
        onClick(!checked);
    };

    return (
        <input
            className={styles.checkbox}
            type="checkbox"
            checked={checked}
            onChange={handleChange}
            style={{ backgroundColor: bgColor }}
        />
    );
}
