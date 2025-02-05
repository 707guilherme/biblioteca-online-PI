package com.mycompany.bibliotecaonline;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import java.awt.Desktop;
import java.net.URI;

@SpringBootApplication
public class BibliotecaApplication {
    public static void main(String[] args) {
        SpringApplication.run(BibliotecaApplication.class, args);

        // Tenta abrir o navegador automaticamente
        abrirNavegador("http://localhost:8081");
    }

    private static void abrirNavegador(String url) {
    try {
        String os = System.getProperty("os.name").toLowerCase();
        if (os.contains("win")) {
            new ProcessBuilder("cmd", "/c", "start", url).start();
        } else if (os.contains("mac")) {
            new ProcessBuilder("open", url).start();
        } else if (os.contains("nix") || os.contains("nux")) {
            new ProcessBuilder("xdg-open", url).start();
        }
    } catch (Exception e) {
        System.out.println("Por favor, acesse a página diretamente: http://localhost:8081");
    }
}

}
