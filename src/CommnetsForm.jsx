export default function CommentForm(){
  return(
    <div>
      <h4>Give a comment!</h4>
      <form>
        <input placeholder="username" type="text" />
        <br /><br />
        <textarea name="" id="">Remarks</textarea>
        <br /><br />
        <input  placeholder="rating" type="number" />
        <br /><br />
        <button>Submit</button>
      </form>
    </div>
  )
}