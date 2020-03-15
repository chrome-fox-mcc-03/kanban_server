# kanban_server

[Link to documentation](https://documenter.getpostman.com/view/10699479/SzS2w7sh)

<h1>User</h1>
<details>
	<summary><strong>Log In</strong></summary>

| Key        | Value|
|------------|-|
| Url        | https://h8-kanban.herokuapp.com/login |
| Method     | `POST` |
| Data:      | |
| * Headers  | {<br>&nbsp;&nbsp;`"Content-Type": "application/x-www-form-urlencoded"`<br>} |
| * Body     | `email=[string]` (**required**)<br>`password=[string]` (**required**) |
| Responses: | |
| * Success  | Code: 200<br>{<br>&nbsp;&nbsp;`token: [token-string]`,<br>&nbsp;&nbsp;`name: [string]`<br>} |
| * Error    | Code: 400<br>{<br>&nbsp;&nbsp;`message: ['Wrong email/password combination']`<br>}<br><br>OR<br><br>Code: 500<br>{<br>&nbsp;&nbsp;`message: ['Internal server error']`<br>} |
</details>

<details>
	<summary><strong>Register</strong></summary>

| Key        | Value |
|------------|-|
| Url        | https://h8-kanban.herokuapp.com/register |
| Method     | `POST` |
| Data:      | |
| * Headers  | {<br>&nbsp;&nbsp;`"Content-Type": "application/x-www-form-urlencoded"`<br>} |
| * Body     | `email=[string]` (**required**)<br>`password=[string]` (**required**)<br>`name=[string]` |
| Responses: | |
| * Success  | Code: 201<br>{<br>&nbsp;&nbsp;`token: [token-string]`,<br>&nbsp;&nbsp;`name: [string]`<br>} |
| * Error    | Code: 400<br>{<br>&nbsp;&nbsp;`message: ['Email already registered']`<br>}<br><br>OR<br><br>Code: 500<br>{<br>&nbsp;&nbsp;`message: ['Internal server error']`<br>} |
</details>


<details>
	<summary><strong>Get All User</strong></summary>

| Key        | Value |
|------------|-|
| Url        | https://h8-kanban.herokuapp.com/register |
| Method     | `POST` |
| Data:      | |
| * Headers  | {<br>&nbsp;&nbsp;`"Content-Type": "application/x-www-form-urlencoded"`<br>} |
| * Body     | `email=[string]` (**required**)<br>`password=[string]` (**required**)<br>`name=[string]` |
| Responses: | |
| * Success  | Code: 201<br>{<br>&nbsp;&nbsp;`token: [token-string]`,<br>&nbsp;&nbsp;`name: [string]`<br>} |
| * Error    | Code: 400<br>{<br>&nbsp;&nbsp;`message: ['Email already registered']`<br>}<br><br>OR<br><br>Code: 500<br>{<br>&nbsp;&nbsp;`message: ['Internal server error']`<br>} |
</details>

<h1>Project</h1>
<details>
	<summary><strong>Create New Project</strong></summary>

| Key        | Value |
|------------|-|
| Url        | https://h8-kanban.herokuapp.com/projects |
| Method     | `POST` |
| Data:      | |
| * Headers  | {<br>&nbsp;&nbsp;`"Content-Type": "application/x-www-form-urlencoded"`<br>&nbsp;&nbsp;`token: [token-string]`<br>} |
| * Body     | `name=[string]`<br>`description=[string]` |
| Responses: | |
| * Success  | Code: 201<br>{<br>&nbsp;&nbsp;`id: [integer]`,<br>&nbsp;&nbsp;`name: [string]`,<br>&nbsp;&nbsp;`description: [string]`,<br>&nbsp;&nbsp;`projectLeader: [integer]`,<br>&nbsp;&nbsp;`updatedAt: [date]`,<br>&nbsp;&nbsp;`createdAt: [date]`<br>} |
| * Error    | Code: 500<br>{<br>&nbsp;&nbsp;`message: ['Internal server error']`<br>} |
</details>

<details>
	<summary><strong>Invite User to Project</strong></summary>

| Key        | Value |
|------------|-|
| Url        | https://h8-kanban.herokuapp.com/projects/:projectId/participants/:userId |
| Method     | `POST` |
| Data:      | |
| * URL      | `projectId:[integer]`(**required**)<br>`userId:[integer]`(**required**) |
| * Headers  | {<br>&nbsp;&nbsp;`Content-Type: "application/x-www-form-urlencoded"`<br>&nbsp;&nbsp;`token: [token-string]`<br>} |
| * Body     | `name=[string]`<br>`description=[string]` |
| Responses: | |
| * Success  | Code: 201<br>{<br>&nbsp;&nbsp;`id: [integer]`,<br>&nbsp;&nbsp;`projectId: [integer]`,<br>&nbsp;&nbsp;`UserId: [integer]`,<br>&nbsp;&nbsp;`createdAt: [date]`,<br>&nbsp;&nbsp;`UpdatedAt: [date]`<br>} |
| * Error    | Code: 400<br>[<br>&nbsp;&nbsp;`"User already participated!"`<br>]<br><br>OR<br><br>Code: 500<br>{<br>&nbsp;&nbsp;`message: ['Internal server error']`<br>} |
</details>

<details>
	<summary><strong>Get All Project</strong></summary>

| Key        | Value |
|------------|-|
| Url        | https://h8-kanban.herokuapp.com/projects |
| Method     | `GET` |
| Data:      | |
| * Headers  | {<br>&nbsp;&nbsp;`token: [token-string]`<br>} |
| Responses: | |
| * Success  | Code: 200<br>[<br>&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;`id: [integer]`,<br>&nbsp;&nbsp;&nbsp;&nbsp;`name: [string]`,<br>&nbsp;&nbsp;&nbsp;&nbsp;`description: [string]`,<br>&nbsp;&nbsp;&nbsp;&nbsp;`projectLeader: [integer]`,<br>&nbsp;&nbsp;&nbsp;&nbsp;`createdAt: [date]`<br>&nbsp;&nbsp;},<br>&nbsp;&nbsp;...<br>] |
| * Error    | Code: 500<br>{<br>&nbsp;&nbsp;`message: ['Internal server error']`<br>} |
</details>

<details>
	<summary><strong>Get Project's Kanban</strong></summary>

| Key        | Value |
|------------|-|
| Url        | https://h8-kanban.herokuapp.com/projects/:projectId/kanban |
| Method     | `GET` |
| Data:      | |
| * Headers  | {<br>&nbsp;&nbsp;`token: [token-string]`<br>} |
| Responses: | |
| * Success  | Code: 200<br>{<br>&nbsp;&nbsp;Backlog: [<br>&nbsp;&nbsp; `[card-object]`, <br>&nbsp;&nbsp; ... <br>&nbsp;&nbsp;],<br>&nbsp;&nbsp;Product: [<br>&nbsp;&nbsp; `[card-object]`, <br>&nbsp;&nbsp; ... <br>&nbsp;&nbsp;],<br>&nbsp;&nbsp;Development: [<br>&nbsp;&nbsp; `[card-object]`, <br>&nbsp;&nbsp; ... <br>&nbsp;&nbsp;],<br>&nbsp;&nbsp;Done: [<br>&nbsp;&nbsp; `[card-object]`, <br>&nbsp;&nbsp; ... <br>&nbsp;&nbsp;]<br>}<br>`card-object refer to Create New Card result` |
| * Error    | Code: 500<br>{<br>&nbsp;&nbsp;`message: ['Internal server error']`<br>} |
</details>

<h1>Card</h1>
<details>
	<summary><strong>Create New Card</strong></summary>

| Key        | Value |
|------------|-|
| Url        | https://h8-kanban.herokuapp.com/cards |
| Method     | `POST` |
| Data:      | |
| * Headers  | {<br>&nbsp;&nbsp;`"Content-Type": "application/x-www-form-urlencoded"`<br>&nbsp;&nbsp;`token: [token-string]`<br>} |
| Responses: | |
| * Success  | Code: 201<br>{<br>&nbsp;&nbsp;`description: [string]`,<br>&nbsp;&nbsp;`dueDate: [date]`,<br>&nbsp;&nbsp;`status: [string]`,<br>&nbsp;&nbsp;`ProjectId: [integer]`<br>} |
| * Error    | Code: 500<br>{<br>&nbsp;&nbsp;`message: ['Internal server error']`<br>} |
</details>

<details>
	<summary><strong>Update Card</strong></summary>

| Key        | Value |
|------------|-|
| Url        | https://h8-kanban.herokuapp.com/cards/:cardId |
| Method     | `PUT` |
| Data:      | |
| * URL      | `cardId:[integer]`(**required**) |
| * Headers  | {<br>&nbsp;&nbsp;`"Content-Type": "application/x-www-form-urlencoded"`<br>&nbsp;&nbsp;`token: [token-string]`<br>} |
| Responses: | |
| * Success  | Code: 200<br>{<br>&nbsp;&nbsp;`description: [string]`,<br>&nbsp;&nbsp;`dueDate: [date]`,<br>&nbsp;&nbsp;`status: [string]` <br>} |
| * Error    | Code: 500<br>{<br>&nbsp;&nbsp;`message: ['Internal server error']`<br>} |
</details>

<details>
	<summary><strong>Change Card Status</strong></summary>

| Key        | Value |
|------------|-|
| Url        | https://h8-kanban.herokuapp.com/cards/:cardId/:status |
| Method     | `PUT` |
| Data:      | |
| * URL      | `cardId:[integer]`(**required**)<br>`status:[string]`(**required**) |
| * Headers  | {<br>&nbsp;&nbsp;`token: [token-string]`<br>} |
| Responses: | |
| * Success  | Code: 201<br>{<br>&nbsp;&nbsp;`description: [string]`,<br>&nbsp;&nbsp;`dueDate: [date]`,<br>&nbsp;&nbsp;`status: [string]` <br>} |
| * Error    | Code: 500<br>{<br>&nbsp;&nbsp;`message: ['Internal server error']`<br>} |
</details>

<details>
	<summary><strong>Delete Card</strong></summary>

| Key        | Value |
|------------|-|
| Url        | https://h8-kanban.herokuapp.com/cards/:cardId/ |
| Method     | `DELETE` |
| Data:      | |
| * URL      | `cardId:[integer]`(**required**) |
| * Headers  | {<br>&nbsp;&nbsp;`token: [token-string]`<br>} |
| Responses: | |
| * Success  | Code: 200<br>{<br>{<br>&nbsp;&nbsp;`message: "Card successfully deleted"`<br>&nbsp;&nbsp;`data: [card-object]`<br>} |
| * Error    | Code: 404<br>[<br>&nbsp;&nbsp;`"Card not found!"`<br>]<br><br>OR<br><br>Code: 500<br>{<br>&nbsp;&nbsp;`message: ['Internal server error']`<br>} |
</details>