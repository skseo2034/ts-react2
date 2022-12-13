import React, {Dispatch, FunctionComponent, useMemo} from "react";
import Td from "./Td";

interface Props  {
    rowIndex: number;
    rowData: string[];
    dispatch: Dispatch<any>;
}

const Tr: FunctionComponent<Props> = ({ rowIndex, rowData, dispatch }) => {
    return(
        <tr>
            { Array(rowData.length).fill(null).map((td, i) => (
                useMemo(
                    () => <Td key={i} dispatch={dispatch} rowIndex={rowIndex} cellIndex={i} cellData={rowData[i]}>{''}</Td>,
                [rowData[i]],
                )
                ))}
        </tr>
    );
}

export default Tr;