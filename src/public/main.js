function setUUID() {
    const uuid = document.getElementById('getBy').value;
    document.getElementById('getAction').action = `/api/V0.1/${uuid}`
}

async function setPOST() {
    const id = document.getElementById('postID').value;
    const name = document.getElementById('postName').value;
    const uuid = document.getElementById('postUUID').value;
    await fetch('/api/V0.1/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id: id,
            name: name,
            uuid: uuid
        }),
    }).then(async (res) => addResponseToNode(await res.text()));
}

async function setPatch() {
    const id = document.getElementById('patchID').value;
    const name = document.getElementById('patchName').value;
    const uuid = document.getElementById('patchUUID').value;
    await fetch(`/api/V0.1/${uuid}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id: id,
            name: name,
        }),
    }).then(async (res) => addResponseToNode(await res.text()));
}

async function setDelete() {
    const uuid = document.getElementById('deleteUUID').value;
    await fetch(`/api/V0.1/${uuid}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    }).then(async (res) => addResponseToNode(await res.text()));
}

function addResponseToNode(response) {
    let el;
    try {
        response = JSON.parse(response)
        if (!response.uuid) {
            response = response[response.length > 1 ? response.length - 1 : 0]
        }
        el = document.getElementById('results');
    } catch (error) {
        response = `Error: ${error.toString()}`;
        el = document.getElementById('errors');
    }
    const linebreak = document.createElement('br');
    el.appendChild(linebreak);
    const node = document.createTextNode(JSON.stringify(response));
    el.appendChild(node);
}