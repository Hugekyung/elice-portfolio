import { Award } from "../db/models/Award";
import { v4 as uuidv4 } from "uuid";

class AwardService {
    static async createAward({ user_id, title, description }) {
        const award_id = uuidv4();

        const awardData = { award_id, user_id, title, description };
        const newAward = await Award.create({awardData});
        return newAward;
    }

    static async getAwardById({ award_id }) {
        const award = await Award.findById({award_id});

        // award_id에 해당하는 정보가 없을 때
        if (!award) {
            const errorMessage = "일치하는 award_id가 없습니다."
            return { errorMessage };
        }
        return award;
    }

    static async updateAward({ award_id, updateValue }) {
        // award_id와 일치하는 award를 찾기
        const award = await Award.findById({ award_id });

        if (!award) {
            const errorMessage = "일치하는 award_id가 없습니다."
            return { errorMessage };
        }

        // 해당 award를 받은 정보로 업데이트
        if (updateValue.title) {
            const fieldToUpdate = "title";
            const value = updateValue.title;
            award = await Award.update({ award_id, fieldToUpdate, value });
        }
        
        if (updateValue.description) {
            const fieldToUpdate = "description";
            const value = update.description;
            award = await Award.update({ award_id, fieldToUpdate, value });
        }

        return award;
    }

    static async getAwardListByUserId() {

    }
}

export { AwardService };