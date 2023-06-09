import {Injectable, NotFoundException} from '@nestjs/common';
import { Board, BoardStatus } from "./board.model";
import { v1 as uuid } from 'uuid';
import {CreateBoardDto} from "./dto/create-board.dto";

@Injectable()
export class BoardsService {
    private boards: Board[] = [];

    getAllBoards(): Board[] {
        return this.boards;
    }

    createBoard(createBoardDto: CreateBoardDto) {
        const {title, description} = createBoardDto;

        const board: Board = {
            id: uuid(),
            title, //클래스 인수와 파라미터 이름이 동일하면 생략 가능
            description,
            status: BoardStatus.PUBLIC,
        };

        this.boards.push(board);
        return board;
    }

    getBoardById(id: string): Board {
        const found = this.boards.find((board) => board.id === id);

        if (!found) {
            throw new NotFoundException(`Can't find Board with id ${id}`);
        }

        return found;
    }

    deleteBoardById(id: string): void {
        this.boards = this.boards.filter((board) => board.id !== id);
    }

    updateBoardStatusById(id: string, status: BoardStatus): Board {
        const board = this.getBoardById(id);
        board.status = status;
        return board;
    }
}
