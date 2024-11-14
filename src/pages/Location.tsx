import React from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

export function Location() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-12">
          Nossa Localização
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
                Informações de Contato
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <MapPin className="h-6 w-6 text-red-600" />
                  <div>
                    <p className="font-semibold dark:text-white">Endereço</p>
                    <p className="text-gray-600 dark:text-gray-300">
                      Av. Principal, 1000
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      Bairro Centro - São Paulo, SP
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">CEP: 01234-567</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Phone className="h-6 w-6 text-red-600" />
                  <div>
                    <p className="font-semibold dark:text-white">Telefone</p>
                    <p className="text-gray-600 dark:text-gray-300">
                      (11) 99999-9999
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Mail className="h-6 w-6 text-red-600" />
                  <div>
                    <p className="font-semibold dark:text-white">E-mail</p>
                    <p className="text-gray-600 dark:text-gray-300">
                      contato@autoelite.com.br
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Clock className="h-6 w-6 text-red-600" />
                  <div>
                    <p className="font-semibold dark:text-white">Horário de Funcionamento</p>
                    <p className="text-gray-600 dark:text-gray-300">
                      Segunda a Sexta: 8h às 18h
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      Sábado: 8h às 13h
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
                Como Chegar
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Estamos localizados em uma das principais avenidas da cidade, com fácil
                acesso por transporte público e particular. Próximo ao metrô e
                diversos pontos de ônibus.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975774763454!2d-46.6522977!3d-23.5505199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0x63b9f0af9012c6!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1709913439039!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}