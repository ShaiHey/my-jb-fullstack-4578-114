import { Target } from "../target.model";
import { Draft } from "./draft.model";

export interface Game extends Draft {
    id: string;
    target: Target;
}
