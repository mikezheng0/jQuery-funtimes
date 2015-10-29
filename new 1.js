
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
		var answer_line = "";
        //do something here
		var input = line.split(" ");
		for (i = 1; i <= input[2]; i++)
		{
			if ((i % input[0]) == 0)
			{
				answer_line+="F";
			}
			if (i%input[1] == 0)
			{
				answer_line+="B";
			}
			if (i%input[1] != 0 && (i % input[0]) != 0)
			{
				answer_line += i;
			}
			answer_line+=' ';
		}
        console.log(answer_line);
    }
});