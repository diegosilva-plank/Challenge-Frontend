import { MouseEventHandler } from "react";
import { Card } from "../Card";

interface AddRocketModalProps {
    addRocketBtn: MouseEventHandler<HTMLDivElement>
}

export const AddRocketCard = (props: AddRocketModalProps) => (
    <Card>
        <div className="btn-div">
            <div className="btn btn-green add-rocket-btn" onClick={props.addRocketBtn}>Add Rocket</div>
        </div>
    </Card>
)