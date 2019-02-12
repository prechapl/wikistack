const html = require('html-template-tag');
const layout = require('./layout');

module.exports = () => layout(html`
  <h3>Add a Page</h3>
  <hr>
  <form method="POST" action="/wiki/">

    <div class="form-group">
      <label for="author" class="col-sm-2 control-label">Author Name</label>
        <div class="col-sm-10">
          <input id="title" name="authorName" type="text" class="form-control"/>
        </div>

    <div class="form-group">
      <label for="email" class="col-sm-2 control-label">Author Email</label>
        <div class="col-sm-10">
          <input id="authorEmail name="authorEmail" type="text" class="form-control"/>
        </div>
    </div>

    <div class="form-group">
      <label for="title" class="col-sm-2 control-label">Page Title</label>
        <div class="col-sm-10">
          <input id="title" name="pageTitle" type="text" class="form-control"/>
        </div>
    </div>

    <div class="form-group">
    <label for="textArea" class="col-sm-2 control-label">Content</label>
      <div class="col-sm-10">
        <input id="title" name="textContent" type="textarea" class="form-control" placeholder="Enter text here"/>
      </div>
  </div>

  <div class="form-group">
  <label for="statusFeild" class="col-sm-2 control-label">Page Status</label>
    <div class="col-sm-10">
      <input id="title" name="statusFeild" type="text" class="form-control" placeholder="Enter status here"/>
    </div>
</div>

    <div class="col-sm-offset-2 col-sm-10">
      <button type="submit" class="btn btn-primary">submit</button>
    </div>

  </form>
`);
