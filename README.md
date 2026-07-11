# Site IA-XTECH — GitHub Pages

Site institucional estático, pronto para publicação no repositório `iaxtech/iaxtech.github.io`.

## Publicação substituindo o site antigo

1. Faça backup do repositório atual.
2. Apague os arquivos antigos da pasta local do repositório.
3. Copie **todo o conteúdo desta pasta** para a raiz do repositório.
4. No terminal, execute:

```bash
git add -A
git commit -m "Novo site institucional IA-XTECH"
git push origin main
```

## Estrutura necessária na raiz

- `index.html`
- `404.html`
- `CNAME`
- `.nojekyll`
- pasta `assets`

## GitHub Pages

Em **Settings → Pages**, configure:

- Source: **Deploy from a branch**
- Branch: **main**
- Folder: **/(root)**

O domínio configurado no arquivo `CNAME` é `www.iaxtech.com.br`.

## Teste local

Basta abrir `index.html` no navegador. O formulário direciona os dados preenchidos para o WhatsApp da IA-XTECH.
