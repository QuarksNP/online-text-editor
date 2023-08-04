import { useReducer } from 'react'

import { type ActionType, type StateType } from '../types/types';

import { ACTIONS } from '../consts/action-types';
import { SENSIBILITY } from '../consts/reposition-sensibility';

import { isMoveAction } from '../utils/movePredicate';

function reducer(state: StateType, action: ActionType): StateType {
    switch (action.type) {
        case ACTIONS.REPOSITION: {
            return {
                ...state,
                isReposition: !state.isReposition
            }
        }

        case ACTIONS.PRESS: {
            if (!state.isReposition) return state
            return {
                ...state,
                isPress: true,
                isPosition: true
            }
        }

        case ACTIONS.MOVE: {
            if (!state.isPosition || !state.isReposition) return state

            if (isMoveAction(action)) {
                const currentY = action.payload.clientY
                const refCurrent = action.payload.refCurrent

                if (currentY < state.prevY && refCurrent != null) {
                    refCurrent.scrollTop += SENSIBILITY
                } else if (refCurrent != null) {
                    refCurrent.scrollTop -= SENSIBILITY
                }
                return {
                    ...state,
                    prevY: currentY
                }
            }

            break;
        }

        case ACTIONS.RELEASE: {
            if (!state.isReposition) return state

            return {
                ...state,
                isPress: false,
                isPosition: false
            }
        }

        case ACTIONS.LEAVE: {
            if (!state.isReposition) return state

            return {
                ...state,
                isPosition: false
            }
        }

        default: {
            return state
        }
    }

    return state
}

export const usePointerCover = (coverRef: React.RefObject<HTMLElement>) => {

    const initialState = {
        isPosition: false,
        isReposition: false,
        isPress: false,
        prevY: 0,
    }
    const [state, dispatch] = useReducer(reducer, initialState);


    function handleReposition() {
        dispatch({ type: ACTIONS.REPOSITION })
    }
    function handleDown() {
        dispatch({ type: ACTIONS.PRESS })
    }

    function handleMove(event: React.PointerEvent<HTMLElement>) {
        dispatch({
            type: ACTIONS.MOVE,
            payload: {
                clientY: event.clientY,
                refCurrent: coverRef.current
            }
        })
    }

    function handleUp() {
        dispatch({ type: ACTIONS.RELEASE })
    }

    function handleLeave() {
        dispatch({ type: ACTIONS.LEAVE })
    }

    return {
        state,
        handleDown,
        handleMove,
        handleUp,
        handleLeave,
        handleReposition,
    }
}

