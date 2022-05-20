function solve() {
    document.querySelector('#searchBtn').addEventListener('click', onClick);

    function onClick() {
        let studentsInfo = document.querySelectorAll('tbody tr');
        let searchTerm = document.getElementById('searchField').value;

        for (let i = 0; i < studentsInfo.length; i++) {
            let row = studentsInfo[i];
            row.classList.remove('select');
        }

        for (let i = 0; i < studentsInfo.length; i++) {
            let row = studentsInfo[i];
            let rowValues = row.textContent;
            if (rowValues.includes(searchTerm)) {
                row.classList.add('select');
            }
        }

        document.getElementById('searchField').value = '';
    }
}