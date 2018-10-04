import answers from '../models/answers';

const MagicService = question => {
    const randomIndex = Math.floor( Math.random() * answers.length );
    return {
        question,
        answer: answers[ randomIndex ]
    }

}

export default MagicService
