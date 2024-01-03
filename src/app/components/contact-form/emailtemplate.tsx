import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  about: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  about
}) => (
  <div>
    <h1>{name}, Acabou de enviar uma mensagem!</h1>
    <p>{about}</p>
  </div>
);