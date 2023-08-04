import { styled } from 'styled-components';

type Props = {
    titleHandle: (e: any) => void;
    addTodo: () => void;
    list: Array<string>;
    todoUpdate: (id: number, todo: string, isComplete: boolean) => void;
    fixHandler: (index: number) => void;
    isFix: number;
    fixTitleHandler: (e: any) => void;
    fixTitle: string;
    todoDelete: (id: number) => void;
};

export default function TodoComponent({
    titleHandle,
    addTodo,
    list,
    todoUpdate,
    fixHandler,
    isFix,
    fixTitleHandler,
    fixTitle,
    todoDelete,
}: Props) {
    return (
        <Wrap>
            <Add>
                <input data-testid="new-todo-input" type="text" onChange={titleHandle} />
                <button data-testid="new-todo-add-button" onClick={addTodo}>
                    추가
                </button>
            </Add>

            <List>
                {list?.map((item: any, index: number) => (
                    <li key={`li-${index}`}>
                        <input
                            type="checkbox"
                            checked={item.isCompleted}
                            onChange={() => todoUpdate(item.id, item.todo, !item.isCompleted)}
                        />
                        {item.todo}
                        {isFix === index ? (
                            <>
                                <input data-testid="modify-input" onChange={fixTitleHandler} value={fixTitle} />
                                <button
                                    data-testid="submit-button"
                                    onClick={() => {
                                        todoUpdate(item.id, fixTitle, item.isCompleted);
                                        fixHandler(-1);
                                    }}
                                >
                                    제출
                                </button>
                                <button
                                    data-testid="cancel-button"
                                    onClick={() => {
                                        fixHandler(-1);
                                    }}
                                >
                                    취소
                                </button>
                            </>
                        ) : (
                            <>
                                <button data-testid="modify-button" onClick={() => fixHandler(index)}>
                                    수정
                                </button>
                                <button data-testid="delete-button" onClick={() => todoDelete(item.id)}>
                                    삭제
                                </button>
                            </>
                        )}
                    </li>
                ))}
            </List>
        </Wrap>
    );
}

const Wrap = styled.div``;

const Add = styled.div`
    display: flex;
`;

const List = styled.div``;
