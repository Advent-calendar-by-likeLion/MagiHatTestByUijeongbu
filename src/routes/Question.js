import QuestionCard from "components/QuestionCard";

const Question = ({ match }) =>{
    return(
        <>
            <QuestionCard match={match} />
        </>
    );
};

export default Question;
