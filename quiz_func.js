let container_el = $('.container')
let question_el = $('.question')
let btn = $('.btn')
let options_els = $('.option')
let q_no = 0
let score = 0

ques_arr = [
  {q: "What does <i>NASA</i> stands for?", options: ["National Aeronautics and Space Administration","National Atomic Search Agency","Narendra and Sons Agency","None of these"], correct_answer: 0},
  {q: "What is the molecular weight of Deuterium?  (in amu)", options: ["1","2","86","82"], correct_answer: 1},
  {q: "What is the capital of Andhra Pradesh?", options: ["Hyderabad","Banglore","Chennai","Amaravati"], correct_answer: 3},
  {q: "Who is the CEO of SpaceX ?", options: ["Elon Mask","Eleven Must","Ellen Mosk","Elon Musk"], correct_answer: 3},
  {q: "Which country has the Earliest Clock?", options: ["New Zealand","Japan","Tokyo","Yash Gulati"], correct_answer: 3},
  {q: "What does 'Frere' mean?", options: ["Father","Friend","Brother","Husband"], correct_answer: 2},
  {q: "How many cubes are there in a Rubik's Cube?", options: ["27","26","36","54"], correct_answer: 1},
  {q: "On which date Damodardas Mulchand Modi born?", options: ["1915","1945","205 A.D.","1954"], correct_answer: 0},
  {q: "What is the speed of Light?", options: ["3x10<sup>8</sup> m/s","299 792 458 m/s","2.9x10<sup>8</sup>","343 m/s"], correct_answer: 1},
  {q: "What is the unit of Magnetic flux?", options: ["Tesla","Newton","Weber","Flux"], correct_answer: 2}

]

btn.on("click", next_ques)

function next_ques() {
    let q_data = ques_arr[q_no++]
    if(!q_data) return show_score()
    let question = q_data.q
    options = q_data.options

    question_el.html(q_no + ". " + question)
    options_els.removeClass('selected')
    $(options_els[0]).html(options[0])
    $(options_els[1]).html(options[1])
    $(options_els[2]).html(options[2])
    $(options_els[3]).html(options[3])
} next_ques()

options_els.on('click', function() {
  options_els.removeClass('selected')
  $(this).addClass('selected')
  ques_arr[q_no - 1].answer = options_els.index($(this))
})

function show_score() {
  for (i in ques_arr) {
    answer = ques_arr[i].answer
    correct_answer = ques_arr[i].correct_answer
    if (answer === correct_answer) score += 10
  }
  container_el.html(`<div class="score">
                      <h1> Score: ${score} / ${ques_arr.length*10}</h1>
                      <p>\`\`\`\` Yaay!!! That was perfect! \`\`\`\`</p>
                    </div>  `)
}
