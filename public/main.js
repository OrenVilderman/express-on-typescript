function setUUID() {
    const uuid = document.getElementById('getBy').value;
    document.getElementById('getAction').action = `/api/V0.1/${uuid}`
}

function setPOST() {
    const id = document.getElementById('postID').value;
    const name = document.getElementById('postName').value;
    const uuid = document.getElementById('postUUID').value;
    fetch('/api/V0.1/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id: id,
            name: name,
            uuid: uuid
        }),
    })
}

function setPatch() {
    const id = document.getElementById('patchID').value;
    const name = document.getElementById('patchName').value;
    const uuid = document.getElementById('patchUUID').value;
    fetch(`/api/V0.1/${uuid}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id: id,
            name: name,
        }),
    })
}