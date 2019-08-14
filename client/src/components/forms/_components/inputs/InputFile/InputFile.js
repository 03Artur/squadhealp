import React from 'react';
import styles from './InputFile.module.scss';


const adaptFileEventToValue = delegate =>
    e => {
        delegate(e.target.files);
    };

const InputFile = ({input: {value: omitValue, onChange, onBlur, ...inputProps,}, meta: omitMeta, ...props,}) => {

    const renderFileList = () => {
        if (omitValue) {
            console.log(omitValue);
            const fileNameList = [];
            for (let i = 0; i < 3 && i < omitValue.length; i++) {
                fileNameList.push(<li key={omitValue[i].name}>{omitValue[i].name}</li>)
            }
            if (omitValue.length > 3) {
                fileNameList.push(<li key={"more"}>...</li>)
            }
            return fileNameList;
        } else {
            return <li>No File Chosen</li>;
        }
    };

    return (
        <div className={styles.container}>
            <label className={styles.labelButton}>
                Choose file
                <input onChange={adaptFileEventToValue(onChange)}
                       onBlur={adaptFileEventToValue(onBlur)}
                       multiple={true}
                       type="file"
                       {...inputProps}
                       className={styles.inputFile}/>
            </label>
            <ul className={styles.fileNameContainer}>
                {
                    renderFileList()
                }
            </ul>
        </div>
    )
};

export default InputFile
