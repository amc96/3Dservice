# 3D Service

Site institucional da 3D Service — atendimento empresarial de TI, sistemas PDV,
locação de impressoras, câmeras de segurança e equipamentos de rede, e cabeamento
estruturado. Parte do Grupo 3D Network.

Feito em HTML, CSS e JavaScript puro (sem build step).

## Estrutura

```
index.html
css/style.css       Estilos e tokens de cor/tipografia
js/main.js          Menu mobile, header com scroll, ano do rodapé
assets/img/         Logo e favicons
```

## Rodando localmente

Qualquer servidor estático funciona. Com Node instalado:

```bash
npm install
npm run dev
```

Acesse http://localhost:5173

(Ou simplesmente abra o `index.html` no navegador — como não há build, funciona
direto também, mas alguns navegadores bloqueiam certos recursos ao abrir via
`file://`. Prefira usar `npm run dev`.)

## Deploy no Railway

1. No [Railway](https://railway.com/), **New Project → Deploy from GitHub repo**
   e selecione este repositório.
2. O Railway detecta o `package.json` e usa o `railway.json` deste projeto:
   ele instala as dependências e roda `npm run start`, que serve os arquivos
   estáticos na porta indicada pelo Railway.
3. Em **Settings → Networking**, gere um domínio público ou siga o passo abaixo
   para o domínio próprio.

### Apontando o domínio 3dservice.tech

1. No serviço, em **Settings → Networking → Custom Domain**, adicione `3dservice.tech`.
2. O Railway mostra um valor de CNAME (algo como `xxxx.up.railway.app`).
3. No provedor onde o domínio foi registrado, crie um registro **CNAME** apontando
   `3dservice.tech` (ou `www`) para esse valor.
   - Se o registrador não aceitar CNAME na raiz, use ALIAS/ANAME equivalente.
4. Aguarde a propagação de DNS — o certificado SSL é emitido automaticamente.

## Link com o site principal (3dnetwork.com.br)

O card "3D Service" na home do grupo deve apontar "Acessar site" para
`https://3dservice.tech/`.

## Pendências / dados a confirmar

Estão marcados como placeholder no código — procure por eles antes de publicar:

- **Rodapé** (`index.html`, seção `<footer>`): e-mail, telefone e endereço reais;
  links do Instagram e Facebook (atualmente apontam para as páginas genéricas).
- **CNPJ** no rodapé.
- Os ícones de serviço são SVGs simples desenhados à mão — troque por outros se
  quiser um estilo diferente.
