import { type ActionType } from "../types/types";

export function isMoveAction(action: ActionType): 
                                    action is 
                                    { 
                                        type: "move";
                                        payload: 
                                        { 
                                            clientY: number; 
                                            refCurrent: HTMLElement | null 
                                        } 
                                    } {
                                        
    return action.type === "move";
}