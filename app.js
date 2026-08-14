const recordBtn = document.querySelector(".recordBtn");

if (recordBtn) {
    recordBtn.addEventListener("click", function () {

        const exerciseName =
            document.getElementById("exerciseName").value;

        const weight =
            document.getElementById("weight").value;

        const reps =
            document.getElementById("reps").value;

        const sets =
            document.getElementById("sets").value;

        console.log("種目名:", exerciseName);
        console.log("重量:", weight);
        console.log("回数:", reps);
        console.log("セット数:", sets);
        
        alert("トレーニングを記録しました！");

        const recordResult = document.getElementById("recordResult");

        recordResult.innerHTML = `
            <div class="saved-record">
                <h3>${exerciseName}</h3>
                <p>${weight}kg × ${reps}回 × ${sets}セット</p>
            </div>
        `;

    });
}