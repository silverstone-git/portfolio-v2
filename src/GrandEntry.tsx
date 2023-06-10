export default function GrandEntry(props: any) {
    
    if(props.entryVisible.heading2) {
        //
        return(<div className=" translate-x-7 transition-all">What has been cooked, what will be cooked - that is the question..</div>);
    } else {
        return(null);
    }
}